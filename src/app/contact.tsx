import Image from "next/image";
import { useState } from "react";

export default function Contact() {
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSubmitting(true);
		const formData = new FormData(e.target as HTMLFormElement);
		console.log(formData);
		setIsSubmitting(false);
	};
	return (
		<>
			<h1 className="text-center text-4xl font-bold my-4">Contact Me</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center my-4">
				<div className="flex flex-col items-center justify-center w-full">
					<form
						onSubmit={handleSubmit}
						className="flex flex-col gap-4 w-full max-w-md">
						<label htmlFor="name" className="sr-only">
							Name
						</label>
						<input
							id="name"
							type="text"
							name="name"
							placeholder="Name"
							required
							className="p-2 border rounded-md"
						/>
						<label htmlFor="email" className="sr-only">
							Email
						</label>
						<input
							id="email"
							type="email"
							name="email"
							placeholder="Email"
							required
							className="p-2 border rounded-md"
						/>
						<label htmlFor="message" className="sr-only">
							Message
						</label>
						<textarea
							id="message"
							name="message"
							placeholder="Message"
							required
							className="p-2 border rounded-md min-h-[150px]"></textarea>
						<button
							type="submit"
							disabled={isSubmitting}
							className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors">
							{isSubmitting ? "Sending..." : "Send"}
						</button>
					</form>
				</div>
				<div className="flex flex-col items-center justify-center w-full max-w-md">
					<Image
						src="/images/contact.png"
						alt="Contact"
						width={500}
						height={500}
					/>
				</div>
			</div>
		</>
	);
}
