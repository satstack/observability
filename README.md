# satstack observability

A completely self-hosted monitoring stack.

## Requirements

* ssh access to a single linux host, either on your lan or in the cloud.

## Features/Bugs

* Uses either certbot for http-01 authentication or ACME dns-01 api (e.g. Namecheap or EasyDNS)
* Uses nginx - flawlessly amazing (and unnecessary) performance that comes with high complexity, essentially resulting in technical debt
* Necessarily builds ntfy-alertmanager from source, which adds complexity (mind your golang versions)

## Deployment

* Configure [host(s)](hosts.cfg) with target machines and the ssh user

* Install dependencies
    ```shell
    pip install -r requirements.txt
    ansible-galaxy install -r requirements.yml
    ```

* For ACME certificate management, uncomment either certbot for http-01 auth, or lego for dns-01

* Create a directory under the host_vars folder for your host(s) and copy/edit configuration from the sample hosts as desired.

## DNS

A sample DNS configuration is provided using [dnscontrol](https://dnscontrol.org/).

* We source api credentials as environment variables: `source .env`
* In the dnscontrol directory, run `dnscontrol preview`, then `dnscontrol push`