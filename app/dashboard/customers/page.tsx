import { Metadata } from 'next';
import { fetchCustomers } from '@/app/lib/data';
import { FormattedCustomersTable } from '@/app/lib/definitions';
import Table from '@/app/ui/customers/table';

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page() {

  const customers = await fetchCustomers();
  return <Table customers={customers} />;
}