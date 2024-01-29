import { Country, Regions } from '@/queries/types';
import axios from 'axios';

export class CountriesService {
  static client = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
  });

  static async getAllCountries(): Promise<Country[]> {
    const response = await CountriesService.client.get('/all');

    return response.data;
  }

  static async getCountryByName(name: string): Promise<Country[]> {
    const response = await CountriesService.client.get(`/name/${name}`);

    return response.data;
  }

  static async getCountryByRegion(region: Regions): Promise<Country[]> {
    const response = await CountriesService.client.get(`/region/${region}`);

    return response.data;
  }
  
  static async getCountryByCode(code: string): Promise<Country[]> {
    const response = await CountriesService.client.get(`/alpha?codes=${code}`);

    return response.data;
  }
}
