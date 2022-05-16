function ErrorMessage({ msg }) {
    return (
        <div className="my-2 w-full py-2 text-center font-medium text-sm text-red-500 rounded-md">
            {msg}
        </div>
    );
}

export default ErrorMessage;
