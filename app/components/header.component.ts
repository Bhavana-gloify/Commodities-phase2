import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="self-center max-w-full w-[1295px]">
      <div class="flex gap-5 max-md:flex-col">
        <div class="w-3/12 max-md:ml-0 max-md:w-full">
          <div
            class="flex grow mt-5 text-xl font-medium text-white max-md:mt-10"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf71aa650dab323c3dd716bbd44220b60cb8eb055777e4a1ea2d176c186bfbe0"
              class="object-contain shrink-0 aspect-square w-[84px]"
              alt="Company logo"
            />
            <h1 class="grow shrink self-start mt-12 w-[229px] max-md:mt-10">
              <span class="font-rubik font-semibold text-[#324148]"
                >COMMODITIES</span
              >
              <span class="font-rubik font-semibold text-[#E5A961]"
                >CONTROL.COM</span
              >
            </h1>
          </div>
        </div>
        <nav class="ml-5 w-9/12 max-md:ml-0 max-md:w-full">
          <div class="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
            <p
              class="self-start text-sm font-semibold text-red-600 max-md:max-w-full"
            >
              MDEX / KLC Close Today I.E 21 Nov, 2024 Due to Diwali Festival
            </p>
            <div class="flex flex-wrap gap-10 mt-9 w-full max-md:max-w-full">
              <div
                class="flex flex-wrap flex-auto gap-6 my-auto max-md:max-w-full"
              >
                <div
                  class="flex flex-wrap flex-auto gap-6 items-center text-base text-slate-800"
                >
                  <a href="#" class="self-stretch my-auto">Home</a>
                  <a
                    href="#"
                    class="flex relative flex-col self-stretch my-auto whitespace-nowrap aspect-[3.75] w-[90px]"
                  >
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/011203ca6e9e9f4feb227c892ed7a1cfe79a7461e385b288b1fe23e997ad6aca"
                      class="object-cover absolute inset-0 size-full"
                      alt=""
                    />
                    Exchange
                  </a>
                  <a
                    href="#"
                    class="flex relative flex-col self-stretch my-auto aspect-[4.167] w-[100px]"
                  >
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b7359298525be0ac432b51a131c8880758c1ad290dd8b6dd3d0c30947f791b7b"
                      class="object-cover absolute inset-0 size-full"
                      alt=""
                    />
                    Trade data
                  </a>
                  <a
                    href="#"
                    class="flex relative flex-col self-stretch my-auto aspect-[5.292] w-[127px]"
                  >
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/43ccb4ff9dbd0723765226fdd3181aeb6338f08571fd236d2ddada058537fe70"
                      class="object-cover absolute inset-0 size-full"
                      alt=""
                    />
                    More resource
                  </a>
                  <a
                    href="#"
                    class="self-stretch my-auto whitespace-nowrap rounded-none w-[100px]"
                  >
                    Subscription
                  </a>
                </div>
                <div
                  class="flex gap-1.5 self-start text-sm font-semibold leading-normal text-amber-600"
                >
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/668897fab1c037556151572f740b0a370fea9c891e066859df4c707c884910da"
                    class="object-contain shrink-0 my-auto w-2.5 aspect-[0.71]"
                    alt="Phone icon"
                  />
                  <span>+91- 7066 5119 11</span>
                </div>
              </div>
              <button
                class="flex gap-1 px-4 py-3 text-sm font-semibold leading-normal text-amber-600 border border-amber-600 border-solid rounded-[40px]"
              >
                <span class="grow">Sign In</span>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f2a542670a51f4ed909994183a5903b30ed69f6ac601210950d50feb651aab2"
                  class="object-contain shrink-0 my-auto aspect-[1.22] w-[11px]"
                  alt="Sign in icon"
                />
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  `,
})
export class HeaderComponent {}
