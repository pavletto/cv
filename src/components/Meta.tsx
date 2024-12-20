export default function Meta({
                                 description,
                                 keywords,
                                 author,
                                 robots,
                                 google_verification,
                                 og
                             }: Meta) {
    return (
        <>
            <meta name="google-site-verification" content={google_verification}/>
            <meta name="description" content={description}/>
            <meta name="keywords" content={keywords}/>
            <meta name="author" content={author}/>
            <meta name="robots" content={robots}/>

            <meta property="og:title" content={og.title}/>
            <meta property="og:description" content={og.description}/>
            <meta property="og:type" content={og.type}/>
            <meta property="og:url" content={og.url}/>
            <meta property="og:image" content={og.image}/>
            <meta property="og:site_name" content={og.site_name}/>
        </>
    )
        ;
}
