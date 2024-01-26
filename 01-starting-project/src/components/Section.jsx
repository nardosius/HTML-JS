

export default function Section({title, children, ...props}) {//...props --> forward to
    return (//section from Section
        <section {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    )

}