const axios = require('axios');
const { getLaunches } = require('../contollers/launches');

jest.mock('axios');

describe('getLaunches', () => {
  it('should return a successful response with data', async () => {
    const mockResponse = { data: [1, 2, 3] };
    axios.get.mockResolvedValueOnce(mockResponse);

    const req = {};
    const res = {
      send: jest.fn(),
      status: jest.fn(),
    };

    await getLaunches(req, res);

    expect(res.send).toHaveBeenCalledWith(mockResponse.data);
    expect(res.status).not.toHaveBeenCalled();
  });
});

