// import * as Etpl from "etpl";
import { SkeletonAppearance, SkeletonAppearanceOptions } from "ralltiir-skeleton";
import { __inline } from "../global";

export class BaiduLoading implements SkeletonAppearance {
  private container: HTMLElement;
  private tpl = __inline("./baiduLoading.etpl");
  constructor(private options: BaiduLoadingOptions) {}
  public render(options: SkeletonAppearanceOptions) {
    this.container = options.target;
    this.container.innerHTML += this.options.Etpl.compile(this.tpl)({
      id: new Date().getTime().toString(32),
      // 百度loading 视觉上有些偏下 调整 30px的偏移
      offsetY: (options.offsetY || 0) + 30,
      toplight: this.options.toplight,
    });
    return this.container;
  }
  public destroy() {
    this.container.innerHTML = "";
  }
}

interface BaiduLoadingOptions {
  Etpl: any;
  toplight?: boolean;
}
