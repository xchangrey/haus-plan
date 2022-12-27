import { Steps } from "../../types/Step";

export interface CreateStepsPublicProps {}
export interface CreateStepsPrivateProps {
  steps: Steps;
}

export interface CreateStepsProps extends CreateStepsPublicProps, CreateStepsPrivateProps {}