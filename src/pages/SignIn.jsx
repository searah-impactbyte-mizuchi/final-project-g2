import withRoot from '../modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import { Field, Form, FormSpy } from 'react-final-form';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '../modules/components/Typography';
import AppFooter from '../modules/views/AppFooter';
import AppAppBar from '../modules/views/AppAppBar';
import AppForm from '../modules/views/AppForm';
import RFTextField from '../modules/form/RFTextField';
import FormButton from '../modules/form/FormButton';
import FormFeedback from '../modules/form/FormFeedback';

const useStyles = makeStyles((theme) => ({
    form: {
        marginTop: theme.spacing(6),
    },
    button: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(2),
    },
    feedback: {
        marginTop: theme.spacing(2),
    },
}));

function SignIn() {
    const classes = useStyles();
    const [sent, setSent] = React.useState(false);

    return (
        <React.Fragment>
            <AppAppBar />
            <AppForm>
                <React.Fragment>
                    <Typography
                        variant='h3'
                        gutterBottom
                        marked='center'
                        align='center'
                    >
                        Sign In
                    </Typography>
                    <Typography variant='body2' align='center'>
                        {'Not a member yet? '}
                        <Link href='/sign-up' align='center' underline='always'>
                            Sign Up here
                        </Link>
                    </Typography>
                </React.Fragment>
                {/* ================== */}
                {/* Formik + Material Ui */}
                <Form
                    initialValues={{ email: '', password: '' }}
                    validate={(values) => {
                        const errors = {};
                        if (!values.email) {
                            errors.email = 'Required';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                values.email
                            )
                        ) {
                            errors.email = 'Invalid email address';
                        }
                        return errors;
                    }}
                    onSubmit={(values) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                        }, 400);

                        setSent(true);
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        submitting,
                    }) => (
                        <form
                            onSubmit={handleSubmit}
                            className={classes.form}
                            noValidate
                        >
                            <Field
                                type='email'
                                autoComplete='email'
                                autoFocus
                                component={RFTextField}
                                disabled={submitting || sent}
                                fullWidth
                                label='Email'
                                margin='normal'
                                name='email'
                                required
                                size='large'
                            />
                            <Field
                                fullWidth
                                size='large'
                                component={RFTextField}
                                disabled={submitting || sent}
                                required
                                name='password'
                                autoComplete='current-password'
                                label='Password'
                                type='password'
                                margin='normal'
                            />
                            <FormSpy subscription={{ submitError: true }}>
                                {({ submitError }) =>
                                    submitError ? (
                                        <FormFeedback
                                            className={classes.feedback}
                                            error
                                        >
                                            {submitError}
                                        </FormFeedback>
                                    ) : null
                                }
                            </FormSpy>
                            <FormButton
                                className={classes.button}
                                disabled={submitting || sent}
                                size='large'
                                color='secondary'
                                fullWidth
                            >
                                {submitting || sent
                                    ? 'In progress…'
                                    : 'Sign In'}
                            </FormButton>
                        </form>
                    )}
                </Form>
                <Typography align='center'>
                    <Link
                        underline='always'
                        href='/premium-themes/onepirate/forgot-password/'
                    >
                        Forgot password?
                    </Link>
                </Typography>
            </AppForm>
            <AppFooter />
        </React.Fragment>
    );
}

export default withRoot(SignIn);
