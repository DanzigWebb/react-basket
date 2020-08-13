import { BehaviorSubject } from 'rxjs';
import { IProduct } from './types';

export default class Basket {

  constructor(private initialProducts: IProduct[]) {
  }

  public state: BehaviorSubject<IProduct[]> = new BehaviorSubject<IProduct[]>(this.initialProducts);

  private products: IProduct[] = this.initialProducts;

  add(product: IProduct): void {
    const findProduct = this.findProduct(product)!;
    if (findProduct.quality) {
      findProduct.quality! += 1;
    } else {
      findProduct.quality = 1
    }
    this.state.next(this.products);
  }

  remove(product: IProduct): void {
    const findProduct = this.findProduct(product)!;
    if (findProduct.quality) {
      findProduct.quality -= 1
    }
    this.state.next(this.products);
  }

  findProduct(product: IProduct): IProduct | null {
    const currentProduct = this.products.find(item => item.id === product.id);
    return currentProduct || null;
  }
}
