import { FiPhone, FiMapPin, FiMail, FiTwitter, FiMessageSquare } from 'react-icons/fi';

const contacts = [
	{
		id: 1,
		name: 'Indonesia',
		icon: <FiMapPin />,
	},
	{
		id: 2,
		name: 'stupidjeff430@gmail.com',
		icon: <FiMail />,
		url: 'mailto:stupidjeff430@gmail.com',
	},
	{
		id: 3,
		name: 'Twitter @jeffersonrj14',
		icon: <FiTwitter />,
		url: 'https://twitter.com/jeffersonrj14',
	},
	{
		id: 4,
		name: 'Keybase @jeffersonrj14',
		icon: <FiMessageSquare />,
		url: 'https://keybase.io/jeffersonrj14',
	},
];

function ContactDetails() {
	return (
		<div className="w-full lg:w-1/2">
			<div className="text-left max-w-xl px-6">
				<h2 className="font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8">
					Contact me
				</h2>
				<ul>
					{contacts.map((contact) => (
					
						<li className="flex " key={contact.id}>
							<i className="text-2xl text-neutral-500 dark:text-neutral-400 mr-4 mt-1">
								{contact.icon}
							</i>
							<a href={contact.url} className="cursor-pointer">
								<span className="text-lg mb-4 text-jefferson-dark dark:text-jefferson-light hover:text-jefferson-main hover:dark:text-jefferson-main decoration-wavy hover:underline underline-offset-4">
									{contact.name}
								</span>
							</a>	
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default ContactDetails;
