import { useEffect, useState } from 'react';
import { Steps } from '../../types/Step';
import { getSteps } from '../../services/steps';
import StepsComponentView from "./StepsComponent.view";
import { CreateStepsProps } from './StepsComponent.props';

export default function StepsComponent() {
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      const response: Steps = await getSteps();

      setSteps(response as any);
    };

    fetchData();
  }, []);

  const stepsProps: CreateStepsProps = {
    steps,
  };

  return <StepsComponentView {...stepsProps} />;

}