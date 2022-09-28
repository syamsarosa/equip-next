import { PrismaClient, Role } from "@prisma/client";
import { GetStaticProps } from "next";
import { useState } from "react";

const prisma = new PrismaClient();

export const getStaticProps: GetStaticProps = async () => {
	const roles = await prisma.role.findMany();

	return {
		props: {
			roles: JSON.parse(JSON.stringify(roles)),
		},
	};
};

interface RoleProps {
	roles: Role[];
}

const Role: React.FC<RoleProps> = (props) => {
	const [roles, setRoles] = useState(props.roles);

	return (
		<div className='text-center'>
			<ul className='text-blue-700'>
				{roles.map((role) => (
					<li key={role.id}>{role.role}</li>
				))}
			</ul>
		</div>
	);
};

export default Role;
