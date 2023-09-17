import axios from 'axios';

const API_ENDPOINT = 'http://13.125.188.63:9000/api/members';
const API_TOKEN =
  'Bearer eyJ0eXBlIjoiYWNjZXNzIiwiYWxnIjoiSFMyNTYifQ.eyJ1c2VySWQiOjUwNCwiaWF0IjoxNjk0ODM5NzYxLCJleHAiOjE2OTYwNDkzNjF9.jXou47N2t0E5M31YXNCR1D32q3WGWSMG3rbtZv3xrbw';

export async function getData(name) {
  const requestBody = {
    nickname: name,
  };

  try {
    const response = await axios.post(API_ENDPOINT, requestBody, {
      headers: {
        Authorization: API_TOKEN,
        'Content-Type': 'application/json',
      },
    });

    return response.data.isAvailable;
  } catch (error) {
    console.error('Error checking name availability:', error.message);
    throw error;
  }
}
