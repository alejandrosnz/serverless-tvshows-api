import { success } from './utils';

const update = (event, context, callback) => {
  const response = success({
    message: 'Nice! Your function executed successfully!',
    input: event
  });

  callback(null, response);
};

export default update;
