import { call, put, takeEvery, all } from 'redux-saga/effects';
import { addToCart, addToCartRequest } from 'src/redux/reducers/cart';

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function* logAddToCart(action: ReturnType<typeof addToCartRequest>) {
  let newPrice = action.payload.price;

  // Using the call effect to handle async operations
  yield call(delay, 100);

  newPrice = newPrice + 1;
  action.payload.price = newPrice;
  console.log('Payload:', action.payload);

  // Dispatch the original action to update the store
  yield put(addToCart(action.payload));
}

function* watchAddToCart() {
  yield takeEvery(addToCartRequest.type, logAddToCart);
}

export default function* rootSaga() {
  yield all([
    // Add sagas here
    watchAddToCart(),
  ]);
}
