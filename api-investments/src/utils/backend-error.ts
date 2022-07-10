export class BackendError extends Error {
  public readonly status: string;
  public readonly url: string;
  constructor(message: string, status: string, url: string) {
    super(message);
    this.name = 'BackendError';
    this.status = status;
    this.url = url;
    Object.setPrototypeOf(this, BackendError.prototype);
  }
  static fromError(err, url: string): BackendError {
    let status = '???';
    let message: string;
    if (err.isAxiosError && err.response) {
      message = JSON.stringify(err.response.data);
      status = err.response.status;
    } else if (err.message) {
      message = err.message;
    } else {
      message = err;
    }
    throw new BackendError(
      `Backend request failed with status ${status}. Backend URL: ${url}. Data: ${message}`,
      status,
      url,
    );
  }
}
