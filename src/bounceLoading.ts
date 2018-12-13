// import * as Etpl from "etpl";
import { SkeletonAppearance, SkeletonAppearanceOptions } from "ralltiir-skeleton";
import { __inline } from "../global";

/**
 * 使用呼吸灯的的Loading SkeletonAppearance
 */
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
  /** Etpl模板引擎 */
  Etpl: any;
  /** Loading居中偏移 */
  offsetY?: number;
}
