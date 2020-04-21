
const appKey = 'elogistik';
const appTitle = 'Best Logistic Surabaya';
const titlePostFix = appTitle;
const isProduction = process.env.NODE_ENV === 'production';
const publicUrl = process.env.PUBLIC_URL;
const serverUrl = isProduction ? 'https://api.bestlogisticsurabaya.com' : 'http://localhost:4000';
const uploadsUrl = serverUrl + '/uploads';
const imageAvatarUrl = publicUrl + '/assets/user.png';
const imageBrandUrl = publicUrl + '/assets/logo.png';
const imageNavbarUrl = publicUrl + '/assets/logo-navbar.png';

export {
	appKey,
	appTitle,
	titlePostFix,
	isProduction,
	publicUrl,
	serverUrl,
	uploadsUrl,
	imageAvatarUrl,
	imageBrandUrl,
	imageNavbarUrl,
}
