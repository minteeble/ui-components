import { SteppingWidgetNavigationPolicy } from "./SteppingWidget.types";

/**
 * `SteppingWidget` Utils class
 */
export class SteppingWidgetUtils {
  /**
   * Merges two navigation policies into one. The second will overwrite the first.
   *
   * @param a First navigation policy.
   * @param b Second navigation policy. This will overwrite.
   * @returns Policies mixed together
   */
  public static mergeNavigationPolicies(
    a: SteppingWidgetNavigationPolicy,
    b: SteppingWidgetNavigationPolicy
  ): SteppingWidgetNavigationPolicy {
    let finalPolicy: SteppingWidgetNavigationPolicy = {};

    if (typeof b.toolbarEnabled !== "undefined")
      finalPolicy.toolbarEnabled = b.toolbarEnabled;
    else finalPolicy.toolbarEnabled = a.toolbarEnabled;

    if (typeof b.nextButtonEnabled !== "undefined")
      finalPolicy.nextButtonEnabled = b.nextButtonEnabled;
    else finalPolicy.nextButtonEnabled = a.nextButtonEnabled;

    if (typeof b.prevButtonEnabled !== "undefined")
      finalPolicy.prevButtonEnabled = b.prevButtonEnabled;
    else finalPolicy.prevButtonEnabled = a.prevButtonEnabled;

    return finalPolicy;
  }
}
