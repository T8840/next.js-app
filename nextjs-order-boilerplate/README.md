This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## More Details
### Use environment-variables for host
- open next.config.js and add the env config:
```
module.exports = {
  env: {
    host: 'backend host',
  },
}
```
- then use the env.host in axios request
for example:
```
const response = await axios.post(
        process.env.host  + "/customer/auth/register",
        formValue
      );
```
- More Reference
https://www.nextjs.cn/docs/basic-features/environment-variables


### Order Status Use Redux Action
for example:
```
  const submitOrder = async (idCar) => {
    // e.preventDefault();

    const values = {
      start_rent_at: formatDate(startDate),
      finish_rent_at: formatDate(endDate),
      car_id: idCar,
    };

    try {
      dispatch(ordersStart());
      const response = await axios.post(
        process.env.host  + "/customer/order",
        values,
        {
          headers: {
            access_token: auth.getToken(),
          },
        }
      );
      if (response.status === 201) {
        dispatch(ordersSuccess(response.data));
        router.push(`/payment/${response.data.id}`);
      }
    } catch (error) {
      dispatch(ordersFailure());
    }
  };
```

Dispatch is a function used to trigger Redux actions. It is used to dispatch an action to the Redux store in order to update the application's state.

Redux is a JavaScript library for managing application state. It uses a centralized storage called the "store" to store the application's state and uses "reducers" to handle state updates. With the dispatch function, you can send an action to the Redux store, and Redux will call the corresponding reducer function to update the state.

In the provided code, dispatch(ordersStart()), dispatch(ordersSuccess(response.data)), and dispatch(ordersFailure()) are dispatching different actions to the Redux store.

For example, dispatch(ordersStart()) might be an action triggered when initiating an order request, used to notify the application that it is processing the order. Similarly, dispatch(ordersSuccess(response.data)) might be an action triggered after successfully creating an order, used to update the application's state. dispatch(ordersFailure()) might be an action triggered when the order request fails, used to handle errors.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## The Backend API is Here

[GitHub](https://github.com/T8840/fastapi-framework/tree/main/fastapi-jwt-auth)


## Todo

1. Import UI Framework such as Daisyui or NextUI
    - https://daisyui.com/
    - https://nextui.org/
2. Need update the request api not just use axios