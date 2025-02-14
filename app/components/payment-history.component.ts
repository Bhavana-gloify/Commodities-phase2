import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-payment-history",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="mt-14 w-full max-md:mt-10">
      <h2 class="text-xl font-semibold text-slate-800">Payment history</h2>
      <p class="mt-3 text-lg leading-8 text-slate-600">
        See history of your payment plan invoice
      </p>

      <div
        class="flex flex-col self-stretch p-0.5 mt-7 w-full text-sm font-medium leading-6 rounded-xl border-2 border-solid border-slate-300 max-md:max-w-full"
      >
        <div
          class="flex gap-10 px-7 py-2 text-sm font-semibold text-white whitespace-nowrap rounded-xl bg-slate-500 max-md:px-5 max-md:max-w-full"
        >
          <span>Date</span>
          <span>Type</span>
          <span class="my-auto leading-none text-center">Amount</span>
          <span class="grow shrink w-[387px]">Method</span>
        </div>

        <div
          class="flex z-10 flex-wrap gap-5 justify-between items-start py-3.5 pr-14 pl-7 w-full bg-slate-50 max-md:px-5 max-md:max-w-full"
        >
          <div class="flex gap-10 text-slate-600 max-md:max-w-full">
            <span>Jul 20, 2024</span>
            <span>Monthly</span>
            <span>9.00</span>
            <span>DD</span>
          </div>
          <button class="flex gap-2 text-amber-600 whitespace-nowrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/59bad17c5f0572942b49a72f559d53820cf4aa3ba60bd60b13d1ae56f130ddd2"
              class="object-contain shrink-0 self-start aspect-square w-[19px]"
              alt="Download icon"
            />
            <span>Download</span>
          </button>
        </div>

        <!-- Repeat similar structure for other payment history items -->
      </div>
    </section>
  `,
})
export class PaymentHistoryComponent {}
