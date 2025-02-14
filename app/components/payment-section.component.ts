import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-payment-section",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section
      class="flex flex-col items-start px-20 mt-8 w-full max-md:px-5 max-md:max-w-full"
    >
      <h2 class="text-xl font-semibold text-slate-800">Current Plan</h2>
      <p class="mt-1.5 text-lg leading-8 text-slate-600 max-md:max-w-full">
        Update your payment information or change your according to your needs
      </p>

      <div class="self-stretch mt-7 max-md:max-w-full">
        <div class="flex gap-5 max-md:flex-col">
          <div class="w-6/12 max-md:ml-0 max-md:w-full">
            <div class="flex flex-col items-start w-full max-md:max-w-full">
              <div
                class="flex flex-col pb-6 max-w-full rounded-xl border border-solid border-slate-200 w-[584px]"
              >
                <div
                  class="flex flex-wrap gap-5 justify-between px-6 py-4 w-full rounded-xl border border-solid bg-stone-50 border-slate-200 max-md:px-5 max-md:max-w-full"
                >
                  <div
                    class="flex gap-4 self-start text-lg font-semibold whitespace-nowrap text-slate-800"
                  >
                    <div
                      class="flex shrink-0 self-start rounded-full h-[25px] w-[25px]"
                    ></div>
                    <span>Website</span>
                  </div>
                  <div
                    class="px-1.5 py-1 text-xs font-medium leading-6 text-green-500 rounded-lg border border-green-500 border-solid bg-green-400 bg-opacity-20"
                  >
                    Billed yearly
                  </div>
                </div>

                <div class="flex flex-col self-start mt-4 ml-5 max-md:ml-2.5">
                  <div class="text-xl font-semibold text-slate-800">
                    ₹23600.00
                    <span class="font-medium text-xs text-[#475467]"
                      >(including 18% GST)</span
                    >
                  </div>
                  <div
                    class="self-start mt-2 text-sm font-medium leading-loose text-neutral-400"
                  >
                    (Next bill on 29 Aug 2024)
                  </div>
                </div>
              </div>

              <div
                class="flex gap-3 mt-6 max-w-full text-base font-semibold w-[435px]"
              >
                <button
                  class="gap-2.5 self-stretch px-24 py-4 tracking-wide text-white whitespace-nowrap bg-amber-600 rounded-[50px] max-md:px-5"
                >
                  Pay
                </button>
                <button
                  class="gap-2.5 self-stretch px-5 py-4 bg-zinc-100 rounded-[50px] text-slate-600 max-md:px-5"
                >
                  Change subscription
                </button>
              </div>

              <app-payment-history></app-payment-history>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class PaymentSectionComponent {}
