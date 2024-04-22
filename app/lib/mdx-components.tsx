export const components = {
    h1: (props) => (
        <h1 {...props} className="text-xl font-bold mb-6">
            {props.children}
        </h1>
    ),
    h2: (props) => (
        <h2 {...props} className="text-md font-bold mb-6 mt-2">
            {props.children}
        </h2>
    ),
    h3: (props) => (
        <h3 {...props} className="text-normal font-semibold mb-6 mt-2">
            {props.children}
        </h3>
    ),
    p: (props) => (
        <p {...props} className="prose dark:prose-invert mb-3">
            {props.children}
        </p>
    ),
    ul: (props) => (
        <ul {...props} className="list-disc mb-2 pl-6">
            {props.children}
        </ul>
    ),
    li: (props) => (
        <li {...props} className="prose dark:prose-invert leading-normal">
            {props.children}
        </li>
    ),
    img: (props) => (
        <figure>
            <img {...props} className=""/>
            {props.alt ? <figcaption className="text-center">{props.alt}</figcaption> : <></>}
        </figure>
    ),
}