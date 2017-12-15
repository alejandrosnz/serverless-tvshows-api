import { success } from './utils';

const remove = (event, context, callback) => {
  const response = success({
    message: 'Nice! Your function executed successfully!',
    input: event
  });

  callback(null, response);
};

export default remove;
