
import { Directive, OnDestroy } from "@angular/core";
import { Subscription } from 'rxjs';

/**
 * This class destroy all the subscriptions of the components that extend it.
 */
@Directive()
export class SubscriptionManager implements OnDestroy {

  public subscriptions: Subscription[] = [];

  /** @ignore */
  constructor() { }

  /** @ignore */
  ngOnDestroy() {
    // Unsubscribe from everything
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }
}
