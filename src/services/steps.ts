import { Steps } from "../types/Step";

const steps: Steps = [
  {
    label: 'Select foundation',
    description: 'Select foundation for the house',
    formFields: {
      name: 'foundation',
      label: 'foundation',
      isRequired: true,
      errorMsg: 'Foundation is required',
    },
  },
  {
    label: 'Select size',
    description:'An ad group contains one or more ads which target a shared set of keywords.',
    formFields: {
      name: 'size',
      label: 'Size',
      isRequired: true,
      errorMsg: 'Size is required',
    },
  },
  {
    label: 'Decide how many floors',
    description: 'Decide how many floors the house will be built with.',
    formFields: {
      name: 'floors',
      label: 'Floors',
      isRequired: true,
      errorMsg: 'Floors information is required',
    },
  },
  {
    label: 'Add room specifications',
    description: `Add each room specifications such as size (in square meters), 
             type of room, floor type, the number of windows, properties, etc.`,
    formFields: {
      name: 'room',
      label: 'Room specifications',
      isRequired: false,
      errorMsg: 'Room specifications info is required',
      roomSpecs: {
        roomSize: {
          name: 'roomSize',
          label: 'Room size',
        },
        type: {
          name: 'roomType',
          label: 'Room type',
        },
        roomProperties: {
          name: 'roomProps',
          label: 'Room properties',
        },
        floorType: {
          name: 'floorType',
          label: 'Floor type',
        },
        windows: {
          style: {
            name: 'windowStyle',
            label: 'Window style',
          },
          glassType: {
            name: 'glassType',
            label: 'Glass type',
          },
        },
      },
    },
  },
  {
    label: 'Roof type',
    description: 'Select roof type',
    formFields: {
      name: 'roof',
      label: 'Roof type',
      isRequired: true,
      errorMsg: 'Roof type is required',
    },
  },
  {
    label: 'Garden',
    description: 'Select the garden plants ornaments',
    formFields: {
      name: 'garden',
      label: 'Garden',
      isRequired: true,
      errorMsg: 'Garden is required',
    },
  },
];

export const getSteps = (): Promise<Steps> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(steps);
    }, 3000);
  });
};

