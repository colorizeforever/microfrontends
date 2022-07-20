import { ChangeDetectionStrategy, Component, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "@monorep/shared/data-access-user";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Subject, takeUntil } from "rxjs";


@Component({
  selector: 'monorep-root',
  templateUrl: './signIn.component.html',
  styleUrls: ['../styles/sign.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInComponent implements OnDestroy {
  title = 'shell';
  signInForm: FormGroup = new FormGroup({
    login: new FormControl('', [Validators.required, Validators.minLength(4)]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)]),
  })
  private unsubscribe$: Subject<void> = new Subject<void>()

  constructor(
    private router: Router,
    private authService: UserService
    ) { }


  onSignIn(): void {
    this.authService.login(this.signInForm.value)
      .pipe(
        takeUntil(this.unsubscribe$)
      )
      .subscribe(value => {
        if(value) {
          this.router.navigate(['dashboard'])
        }
      })
  }

  getErrorMessage(): string {
    if (this.signInForm.controls['login'].hasError('required')) {
      return 'You must enter a value';
    } else if (this.signInForm.controls['login'].hasError('minLength')) {
      return 'Minimum length is 4'
    }
    return ''
  }

  getErrorPasswordMessage(): string {
    if (this.signInForm.controls['password'].hasError('required')) {
      return 'You must enter a value';
    } else if (this.signInForm.controls['password'].hasError('minLength')) {
      return 'Minimum length is 4'
    }
    return ''
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
