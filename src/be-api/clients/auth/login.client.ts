import { APIRequestContext, request } from "@playwright/test";
import { LoginRequest } from "./contracts/login.request";


export class LoginClient {

	public async getCredentials() {

		const loginPayload:LoginRequest = {
			email: process.env.LOGIN_EMAIL!,
			password:process.env.LOGIN_PASSWORD!
		}

		const apiContext: APIRequestContext = await request.newContext()

		const loginResponse = await apiContext.post(`${process.env.API}/api/users/login`,
			{
				data: {
					user: loginPayload
				}
			}
		)

		const loginResponseJson = await loginResponse.json()

		return loginResponseJson;
	}
}