const axios = require('axios');
const { getMission } = require('../contollers/launches');

jest.mock('axios');

describe('getMission', () => {
  it('should return a successful response with data', async () => {
    const mockResponse = { data: { mission_name: 'Test Mission' } };
    axios.get.mockResolvedValueOnce(mockResponse);

    const req = { params: { missionId: 1 } };
    const res = {
      send: jest.fn(),
      status: jest.fn(),
    };

    await getMission(req, res);

    expect(res.send).toHaveBeenCalledWith(mockResponse.data);
    expect(res.status).not.toHaveBeenCalled();
  });
});
