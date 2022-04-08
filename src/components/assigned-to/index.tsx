import React, {useState, useEffect, useRef} from "react";
import axios from "axios";

import {Projects} from './styles';

import Section from '../section';
import ProjectName from "../project-name";

import {useUserContext} from "../../contexts/user.context";
import {useAPIContext} from '../../contexts/api.context';

interface AssignedToProps {
  fromHr?: Array<string>;
}

const AssignedTo: React.FC<AssignedToProps> = ({fromHr}) => {
    const {REST_API} = useAPIContext();
    const {setLoading, token, id} = useUserContext();
    const [projects, setProjects] = useState<Array<string>>([]);
    const fetched = useRef<boolean>(false);

    useEffect(() => {
      if (fromHr?.length) {
        setProjects(fromHr);
        return;
      }
      if (!token.length || !id.length) return;
      if (fetched.current) return;
      fetched.current = true;
      setLoading!(true);
      axios.post(`${REST_API}/employee/projects`, {id}, {
        headers: {Authorization: `Bearer ${token}`}
      })
      .then(({data}) => {
        setProjects(data.project||[]);
        setLoading!(false);
      }).catch(() => setLoading!(false));
    }, []);

    return (
      <div>
        <Section name="Projects / Assigned to" />
        <Projects>
          {projects.map((pn, idx) => (
            <ProjectName key={idx} id={pn} />
          ))}
        </Projects>
      </div>
    );
};

export default AssignedTo;
