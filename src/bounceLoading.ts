// import * as Etpl from "etpl";
import { SkeletonAppearance, SkeletonAppearanceOptions } from "ralltiir-skeleton";
import { __inline } from "../global";

export class BounceLoading implements SkeletonAppearance {
  private container: HTMLElement;
  private tpl = __inline("./bounceLoading.etpl");
  private id = new Date().getTime().toString(32);
  constructor(private options: BounceLoadingOptions) {}
  public render(options: SkeletonAppearanceOptions) {
    options.target.innerHTML += this.options.Etpl.compile(this.tpl)({
      id: this.id,
      offsetY: (options.offsetY || 0) + (this.options.offsetY || 30),
    });
    this.container = options.target;
    return options.target;
  }
  public destroy() {
    this.container.innerHTML = "";
  }
}

interface BounceLoadingOptions {
  Etpl: any;
  offsetY?: number;
}
