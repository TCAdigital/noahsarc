/**
 * Where the giving buttons point.
 *
 * Noah's Arc does not process payments itself: US donors give through
 * ThinSpace Africa (TSA), and TSA has not supplied its Stripe URLs yet. Until
 * it does, every giving button lands on the contact page, which explains how
 * to give. Replace the values below with the Stripe links and the whole site
 * updates at once -- these constants are the only place they appear.
 */

/** General giving. */
export const DONATE_URL = "/contact";

/** Child sponsorship. */
export const SPONSOR_URL = "/contact";

/** Girls' dormitory construction. */
export const DORMITORY_DONATE_URL = "/contact";

/** The Noah's Arc Education Fund. */
export const EDUCATION_FUND_DONATE_URL = "/contact";
