import { Steps } from "../types/Step";

const steps = [
  {
    label: 'Select foundation',
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: 'Select size',
    description:
      'An ad group contains one or more ads which target a shared set of keywords.',
  },
  {
    label: 'Decide how many floors',
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
  {
    label: 'Add room specifications',
    description: `Add each room specifications such as size (in square meters), 
             type of room, floor type, the number of windows, properties, etc.`
  },
  {
    label: 'Roof type',
    description: 'Select roof type',
  },
  {
    label: 'Garden',
    description: 'Select the plants you want to ornament your garden with.'
  },
];

export const getSteps = (): Promise<Steps> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(steps);
    }, 3000);
  });
};

