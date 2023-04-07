import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map, reduce } from "rxjs";

export interface CategoryData {
  name: string;
  subCategories: string[];
}
export interface SearchData {
  name: string;
  data: string[];
}

export interface HomeDropdownData {
  fashion: CategoryData[];
  electronics: CategoryData[];
  home: CategoryData[];
  beauty: CategoryData[];
  twoWheelers: CategoryData[];
}

export interface AllData {
  searchData: SearchData[];
  homeDropdownData: HomeDropdownData;
}

@Injectable({
  providedIn: "root",
})
export class DataProviderService {
  private DATA_URL = "assets/JSON/data.json";
  constructor(private http: HttpClient) {}

  async getAllData(): Promise<AllData> {
    return await new Promise((resolve, reject) => {
      this.http.get<AllData>(this.DATA_URL).subscribe((data) => {
        resolve(data);
      });
    });
  }
}
