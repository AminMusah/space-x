const axios = require('axios');
const { getRocket } = require('../contollers/launches');

jest.mock('axios');

describe('getRocket', () => {
  it('should return a successful response with data', async () => {
    const mockResponse = { data: { rocket_id: 'falcon1' } };
    axios.get.mockResolvedValueOnce(mockResponse);

    const req = { params: { rocketId: 'falcon1' } };
    const res = {
      send: jest.fn(),
      status: jest.fn(),
    };

    await getRocket(req, res);

    expect(res.send).toHaveBeenCalledWith(mockResponse.data);
    expect(res.status).not.toHaveBeenCalled();
  });
});
