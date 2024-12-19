import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 400 },
    { duration: '1m', target: 1500 },
    { duration: '20s', target: 20 },
  ],
};

export default function () {
  const res = http.get('https://frontend.breizhsport.civit.ovh/');
  check(res, { 'status was 200': (r) => r.status == 200 });
  sleep(1);
}