import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-category-nav",
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav
      class="flex flex-col justify-center px-16 py-2.5 w-full text-base font-medium tracking-normal text-white bg-amber-600 max-md:px-5 max-md:max-w-full"
    >
      <div class="flex flex-wrap gap-6 items-end max-md:max-w-full">
        <a href="#">Veg Oils</a>
        <div
          class="shrink-0 w-0 border border-solid border-white border-opacity-60 h-[23px]"
        ></div>
        <a href="#">Pulses</a>
        <div
          class="shrink-0 w-0 border border-solid border-white border-opacity-60 h-[23px]"
        ></div>
        <a href="#">Cotton</a>
        <div
          class="shrink-0 w-0 border border-solid border-white border-opacity-60 h-[23px]"
        ></div>
        <a href="#">Spices</a>
        <div
          class="shrink-0 w-0 border border-solid border-white border-opacity-60 h-[23px]"
        ></div>
        <a href="#">Sugar/Gur</a>
        <div
          class="shrink-0 w-0 border border-solid border-white border-opacity-60 h-[23px]"
        ></div>
        <a href="#">Plantation</a>
        <div
          class="shrink-0 w-0 border border-solid border-white border-opacity-60 h-[23px]"
        ></div>
        <a href="#">Grains</a>
        <div
          class="shrink-0 w-0 border border-solid border-white border-opacity-60 h-[23px]"
        ></div>
        <a href="#">Precious Metals</a>
        <div
          class="shrink-0 w-0 border border-solid border-white border-opacity-60 h-[23px]"
        ></div>
        <a href="#">Metals</a>
        <div
          class="shrink-0 w-0 border border-solid border-white border-opacity-60 h-[23px]"
        ></div>
        <a href="#">Energy</a>
        <div
          class="shrink-0 w-0 border border-solid border-white border-opacity-60 h-[23px]"
        ></div>
        <a
          href="#"
          class="flex gap-2.5 justify-center items-center whitespace-nowrap"
        >
          <span class="self-stretch my-auto">Others</span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e742fe33017e6665d8ee638b5e2ff8095a1029031ef46cf07701730fdd986ca"
            class="object-contain shrink-0 self-stretch my-auto aspect-[1.5] w-[9px]"
            alt="Dropdown icon"
          />
        </a>
      </div>
    </nav>
  `,
})
export class CategoryNavComponent {}
