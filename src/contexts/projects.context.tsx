import React, {createContext, useContext, useState} from "react";

import {useAPIContext} from './api.context';
import {useOrganisationContext} from './organisation.context';

interface ProjectsContextInterface {
  currProject: string;
  setCurrProject?: (val: string) => void;
}

const defaultState: ProjectsContextInterface = {
  currProject: ''
};

export const ProjectsContext = createContext<ProjectsContextInterface>(defaultState);

export const useProjectsContext = () => useContext(ProjectsContext);

export const ProjectsContextProvider: React.FC = ({children}) => {
    const [currProject, setCurrProject] = useState<string>(defaultState.currProject);

    return (
      <ProjectsContext.Provider
        value={{
          currProject,
          setCurrProject
        }}
      >{children}</ProjectsContext.Provider>
    );
};
