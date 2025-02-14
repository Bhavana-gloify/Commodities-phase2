import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-ticker-bar",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="flex overflow-hidden overflow-x-auto flex-wrap gap-5 justify-between py-0.5 pr-12 pl-5 mt-5 w-full text-base bg-gray-700 max-md:px-5 max-md:max-w-full"
    >
      <div class="flex gap-1.5 items-center">
        <span class="self-stretch my-auto font-medium text-white"
          >Silver : 75.8696</span
        >
        <span
          class="gap-1.5 self-stretch my-auto font-semibold text-center text-green-500"
          >-60.7 (0.35%)</span
        >
      </div>
      <div class="flex gap-1.5 items-center">
        <span class="self-stretch my-auto font-medium text-white"
          >Gold : 475.8585</span
        >
        <span
          class="gap-1.5 self-stretch my-auto font-semibold text-center text-red-400"
          >-60.7 (0.35%)</span
        >
      </div>
      <div class="flex gap-1.5 items-center my-auto">
        <span class="self-stretch my-auto font-medium text-white"
          >Silver : 75.8696</span
        >
        <span
          class="gap-1.5 self-stretch my-auto font-semibold text-center text-green-500"
          >-60.7 (0.35%)</span
        >
      </div>
      <div class="flex gap-1.5 items-center">
        <span class="self-stretch my-auto font-medium text-white"
          >$ vs Rupee : 839.394</span
        >
        <span
          class="gap-1.5 self-stretch my-auto font-semibold text-center text-red-400"
          >-60.7 (0.35%)</span
        >
      </div>
      <div class="flex gap-1.5 items-center">
        <span class="self-stretch my-auto font-medium text-white"
          >Cordial : 839.394</span
        >
        <span
          class="gap-1.5 self-stretch my-auto font-semibold text-center text-green-500"
          >-60.7 (0.35%)</span
        >
      </div>
    </div>
  `,
})
export class TickerBarComponent {}
