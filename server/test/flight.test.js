const axios = require('axios');
const { getFlightNumber } = require('../contollers/launches');

jest.mock('axios');

describe('getFlightNumber', () => {
  it('should return a successful response with data', async () => {
    const mockResponse = { data: { flight_number: 1 } };
    axios.get.mockResolvedValueOnce(mockResponse);

    const req = { params: { flightNumber: 1 } };
    const res = {
      send: jest.fn(),
      status: jest.fn(),
    };

    await getFlightNumber(req, res);

    expect(res.send).toHaveBeenCalledWith(mockResponse.data);
    expect(res.status).not.toHaveBeenCalled();
  });
});
