import { success } from './utils';

const list = (event, context, callback) => {
  const response = success({
    message: 'Nice! Your function executed successfully!',
    input: event
  });

  callback(null, response);
};

export default list;
