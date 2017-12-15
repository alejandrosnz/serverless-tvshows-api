import { success } from './utils';

const hello = (event, context, callback) => {
  const response = success({
    message: 'Nice! Your function executed successfully!',
    input: event
  });

  callback(null, response);
};

export default hello;
