type PageContainerProps = {
    children: React.ReactNode;
}

const PageContainer = ({ children }: PageContainerProps) => {
    return (
        <main className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
            {children}
        </main>
    )
}
export default PageContainer