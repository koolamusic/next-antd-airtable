// /**
//  * Copyright 2020 Google LLC
//  *
//  * Licensed under the Apache License, Version 2.0 (the "License");
//  * you may not use this file except in compliance with the License.
//  * You may obtain a copy of the License at
//  *
//  *      http://www.apache.org/licenses/LICENSE-2.0
//  *
//  * Unless required by applicable law or agreed to in writing, software
//  * distributed under the License is distributed on an "AS IS" BASIS,
//  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  * See the License for the specific language governing permissions and
//  * limitations under the License.
//  *
//  * Manage connection to the API: aka axios: https://github.com/axios/axios/blob/b03f16159eac889baba067ff1e53e8701c86728e/index.d.ts
//  */

// import { HttpsAgent } from 'agentkeepalive';
// import axios, { AxiosInstance, Method, AxiosRequestConfig } from 'axios';
// import tmpl from 'string-template';
// import qs from 'qs';

// export const version = '2.0.2';
// export const defaultHttpsAgent = new HttpsAgent({ keepAlive: true });
// export const defaultTimeout = 10000;
// export const userAgent = `google-maps-services-node-${version}`;
// export const acceptEncoding = 'gzip';
// export const X_GOOG_MAPS_EXPERIENCE_ID = 'X-GOOG-MAPS-EXPERIENCE-ID';

// const baseURL = 'http://localhost:3000';

// const defaultConfig: AxiosRequestConfig = {
// 	baseURL: baseURL,
// 	timeout: defaultTimeout,
// 	httpsAgent: defaultHttpsAgent,
// 	headers: {
// 		'X-Request-With': 'XMLHttpRequest',
// 		'Access-Control-Allow-Origin': '*',

// 		'User-Agent': userAgent,
// 		'Accept-Encoding': acceptEncoding
// 	}
// };

// export const defaultAxiosInstance = axios.create(defaultConfig);

// //   export interface ClientOptions {
// // 	/** AxiosInstance to be used by client. Provide one of axiosInstance or config. */
// // 	axiosInstance?: AxiosInstance;
// // 	/** Config used to create AxiosInstance. Provide one of axiosInstance or config. */
// // 	config?: Config;
// // 	experienceId?: string[];
// //   }

// // interface IResourceFactory {
// //     default: any

// // }

// class ResourceFactory {
// 	// Factory class that generates resource classes. This is required to produce API endpoints. Each class will have the basic endpoints it needs

// 	// Factory class that generates resource classes. This is required to produce API endpoints. Each class will have the basic endpoints it needs
// 	static defaults: any;

// 	static updateDefaults(config: AxiosRequestConfig) {
// 		// update the defaults by taking whatever is there and adding the new stuff to it.
// 		ResourceFactory.defaults = { ...this.defaults, ...config };
// 	}

// 	static createResource(endpoint: string, config = {}) {
// 		// Generator function to create a resource class
// 		class Resource {
// 			//declare types for Resource class
// 			static endpoint: any;
// 			static config: any;
// 			static axios: AxiosInstance;
// 			// implement the http using axios
// 			static buildURL(pattern = '', data = {}) {
// 				// build the url out of the pattern and the data structure sent
// 				let stub = tmpl(pattern, data).replace(/\/+$/, '');
// 				return [ this.endpoint, stub ].join('/').replace(/\/+$/, '');
// 			}

// 			static executeRequest = (
// 				data: object = {},
// 				pattern: string = '',
// 				method: Method = 'GET',
// 				ctx: AxiosRequestConfig = {}
// 			) => {
// 				// build and execute a request based on url pattern and method sent
// 				//@ts-ignore
// 				let url = this.buildURL(pattern, data);
// 				let config: any = { method, url };
// 				let key = method.toLowerCase() === 'get' ? 'params' : 'data';
// 				config[key] = data;

// 				// return Auth.getAuthHeaders(ctx).then((headers) => {
// 				// const updatedHeaders = Object.assign({}, defaultConfig, config.headers);
// 				//@ts-ignore
// 				const updatedHeaders = Object.assign({}, this.config.headers);
// 				// console.log({ updatedHeaders, config }, 'buildUrl ==>', url); // ================ console.log file

// 				// Create Axios Config
// 				// axios.create(config);

// 				// Add Headers to Config Object
// 				config['headers'] = updatedHeaders;
// 				return axios.request(config);
// 			};

// 			// Now implement all default methods
// 			static list(data: any = {}, ctx = {}) {
// 				return this.executeRequest(data, '', 'GET', ctx);
// 			}

// 			static get(data: any, ctx = {}) {
// 				return this.executeRequest(data, '{id}', 'GET', ctx);
// 			}

// 			static save(data, pattern = '{id}', ctx = {}) {
// 				// If there's an ID, switch from a create to an update method
// 				return this.executeRequest(data, pattern, 'POST', ctx);
// 			}
// 		}

// 		Resource.endpoint = endpoint;
// 		Resource.config = { defaultConfig, ...config };
// 		Resource.axios = axios.create(Resource.config);
// 		return Resource;
// 	}
// }

// ResourceFactory.defaults = {
// 	paramsSerializer: function(params: any) {
// 		return qs.stringify(params, {
// 			arrayFormat: 'brackets',
// 			skipNulls: true,
// 			indices: false,
// 			encode: false
// 		});
// 	}
// };

// export default ResourceFactory;
