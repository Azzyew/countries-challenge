import axios from 'axios';

export class CountriesService {
  static client = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
  });

  static async getAllCountries() {
    const response = await CountriesService.client.get('/all');

    return response.data;
  }
}
