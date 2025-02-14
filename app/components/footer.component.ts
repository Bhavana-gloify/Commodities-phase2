import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-footer",
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer
      class="flex overflow-hidden flex-col justify-center py-px mt-20 text-white bg-white max-md:mt-10 max-md:max-w-full"
    >
      <div
        class="flex relative flex-col px-20 pt-12 pb-5 w-full min-h-[377px] max-md:px-5 max-md:max-w-full"
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5de2f023e4ab59a5b598a8b4208835af076f4a72bff9304955e0c1dc597dfea9"
          class="object-cover absolute inset-0 size-full"
          alt="Footer background"
        />

        <div
          class="flex relative flex-wrap gap-5 justify-between max-md:max-w-full"
        >
          <div class="flex flex-col self-start mt-1">
            <div class="flex self-start text-base font-medium">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e01baede44527b89f1793ace76bd67e1ba2100a3b6509162fb4f8ac2d6d1a28f"
                class="object-contain shrink-0 aspect-square w-[77px]"
                alt="Company logo"
              />
              <h2 class="self-start mt-12 basis-auto max-md:mt-10">
                <span class="font-rubik font-semibold text-white"
                  >COMMODITIES</span
                >
                <span class="font-rubik font-semibold text-[#E5A961]"
                  >CONTROL.COM</span
                >
              </h2>
            </div>
            <p class="text-sm font-medium mt-5 pl-2">
              CommodityControl provides latest commodities exchange news
            </p>
            <h3 class="self-start mt-5 text-lg font-bold">Follow Us On</h3>
          </div>

          <nav class="flex flex-col items-start text-base font-medium">
            <h3 class="text-base font-bold text-orange-400">Company</h3>
            <a href="#" class="mt-4">Home</a>
            <a href="#" class="mt-3">About Us</a>
            <a href="#" class="mt-3">Contact</a>
            <a href="#" class="mt-3">News</a>
            <a href="#" class="mt-3">Blog</a>
            <a href="#" class="mt-3">Career</a>
          </nav>

          <nav class="flex flex-col items-start text-base font-medium">
            <h3 class="text-base font-bold text-orange-400">Quick links</h3>
            <a href="#" class="mt-4">Payments</a>
            <a href="#" class="mt-3">Platform Partner</a>
            <a href="#" class="mt-3">Feedback</a>
            <a href="#" class="mt-3">Bookmark</a>
            <a href="#" class="mt-3">Dow jones news archives</a>
            <a href="#" class="mt-3">Disclaimers</a>
          </nav>

          <div
            class="flex flex-col items-start self-start text-base font-semibold"
          >
            <h3 class="font-bold text-orange-400">Contact Us</h3>
            <div class="flex gap-3.5 mt-5 leading-normal max-md:ml-1">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/54be0ee283c9b2b04d26547bc4c18fd4deb4206d5a1fcf290e2f965ed4bffde0"
                class="object-contain shrink-0 self-start aspect-[0.72] w-[13px]"
                alt="Phone icon"
              />
              <span>+91- 7066 5119 11</span>
            </div>

            <div class="mt-7">
              <div
                class="flex gap-2.5 text-sm tracking-normal text-white text-opacity-50"
              >
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea96c4f2ddede481871d5fee0222d859ef7cce3804a046d667b9eb82e4470c74"
                  class="object-contain shrink-0 self-start aspect-square w-[21px]"
                  alt="Email icon"
                />
                <span>For <span class="text-white">Subscriptions</span></span>
              </div>
              <a
                href="mailto:Sales@commoditiescontrol.com"
                class="ml-8 leading-normal max-md:mr-2 max-md:ml-2.5"
              >
                Sales@commoditiescontrol.com
              </a>
            </div>

            <div class="mt-7">
              <div
                class="flex gap-2.5 text-sm tracking-normal text-white text-opacity-50"
              >
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea96c4f2ddede481871d5fee0222d859ef7cce3804a046d667b9eb82e4470c74"
                  class="object-contain shrink-0 self-start aspect-square w-[21px]"
                  alt="Email icon"
                />
                <span>For Partnership & Advertising Enquires</span>
              </div>
              <a
                href="mailto:bizdev@commoditiescontrol.com"
                class="self-end mt-1 leading-normal"
              >
                bizdev@commoditiescontrol.com
              </a>
            </div>
          </div>
        </div>

        <div
          class="flex relative flex-wrap gap-3 items-start self-center mt-14 text-xs tracking-normal max-md:mt-10 max-md:max-w-full"
        >
          <p>
            Copyright © CC Commodity Info Services LLP. / All rights reserved
            @2024
          </p>
          <div
            class="shrink-0 w-0 h-5 border border-solid border-white border-opacity-40"
          ></div>
          <a href="#">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {}
