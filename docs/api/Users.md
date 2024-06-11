# Fetch All Users

## Route

`GET /users`

## Response Body

```js
{
	status: "success" | "failure";
	message?: string; // if any
	data: [
		{
			_id: string;
			name: string;
            email: string;
			avatar: string;
			linkedin: string; // linkedin URL
		}
	];
}
```
