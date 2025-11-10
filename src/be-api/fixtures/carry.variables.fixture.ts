import {test as baseTest } from '@playwright/test'
import { LoginClient } from '../clients/auth/login.client'

let accessToken: string

const loginClient = new LoginClient()

export type variables = {
	clientCredentialsObject :JSON
	accessToken: string
}

export const test = baseTest.extend<variables>({
	accessToken: async ({}, use) => {
		const clientCredentialsObject = await loginClient.getCredentials()
		const array = JSON.parse(JSON.stringify(clientCredentialsObject))
		accessToken = array.user.token

		await use(accessToken)
	}
})