import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-payment",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex gap-10 items-start">
      <div class="flex self-stretch max-md:max-w-full">
        <div
          class="flex overflow-hidden flex-col grow shrink-0 py-1 bg-white basis-0 w-fit max-md:max-w-full"
        >
          <app-header></app-header>
          <app-ticker-bar></app-ticker-bar>
          <app-category-nav></app-category-nav>
          <app-payment-section></app-payment-section>
          <app-footer></app-footer>
        </div>
      </div>
    </div>
  `,
})
export class PaymentComponent {}
