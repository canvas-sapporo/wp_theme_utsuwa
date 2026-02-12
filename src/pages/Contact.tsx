import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import checkIcon from '../assets/circle-check-regular-full.svg';
import xmarkIcon from '../assets/xmark-solid-full.svg';

const PLAN_OPTIONS = [
  { value: '', label: '選択してください' },
  { value: 'standard', label: 'スタンダードプラン' },
  { value: 'business', label: 'ビジネスプラン' },
  { value: 'full-order', label: 'フルオーダープラン' },
];

const VALID_PLAN_VALUES = ['standard', 'business', 'full-order'];

const FIELD_LABELS: Record<string, string> = {
  name: 'Name',
  email: 'Email',
  phone: 'Phone',
  company: 'Company',
  plan: 'Plan',
  message: 'Message',
};

type FieldKey = keyof typeof FIELD_LABELS;

const Contact: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [agreePrivacy, setAgreePrivacy] = useState(false);
  const [plan, setPlan] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<FieldKey[]>([]);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [confirmModalPhase, setConfirmModalPhase] = useState<'entering' | 'visible'>('entering');

  useEffect(() => {
    const planFromUrl = searchParams.get('plan');
    if (planFromUrl && VALID_PLAN_VALUES.includes(planFromUrl)) {
      setPlan(planFromUrl);
    }
  }, [searchParams]);

  const clearError = (field: FieldKey) => {
    setErrors((prev) => prev.filter((k) => k !== field));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreePrivacy) return;

    const emptyFields: FieldKey[] = [];
    if (!name.trim()) emptyFields.push('name');
    if (!email.trim()) emptyFields.push('email');
    if (!phone.trim()) emptyFields.push('phone');
    if (!company.trim()) emptyFields.push('company');
    if (!plan) emptyFields.push('plan');
    if (!message.trim()) emptyFields.push('message');

    if (emptyFields.length > 0) {
      setErrors(emptyFields);
      return;
    }

    setErrors([]);
    setConfirmModalPhase('entering');
    setShowConfirmModal(true);
  };

  useEffect(() => {
    if (!showConfirmModal) return;
    if (confirmModalPhase === 'entering') {
      const id = requestAnimationFrame(() => setConfirmModalPhase('visible'));
      return () => cancelAnimationFrame(id);
    }
    return undefined;
  }, [showConfirmModal, confirmModalPhase]);

  const handleSend = () => {
    setShowConfirmModal(false);
    // 送信処理は必要に応じて実装
  };

  const planLabel = PLAN_OPTIONS.find((o) => o.value === plan)?.label ?? plan;

  return (
    <div className="container mx-auto my-12 px-4 md:px-0">
      <h1 className="text-section-title font-serif mb-10 text-center text-text">Contact</h1>

      <div className="max-w-2xl mx-auto rounded-xl border border-white shadow-custom bg-light/75 backdrop-blur-lg overflow-hidden p-6 md:p-10">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="flex items-center gap-2 text-body font-semibold text-text mb-2">
              <img
                src={checkIcon}
                alt=""
                className="w-4 h-4 shrink-0"
                width={16}
                height={16}
              />
              Name
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => { setName(e.target.value); clearError('name'); }}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-100/80 text-text placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
              placeholder=""
            />
            {errors.includes('name') && (
              <p className="text-red-600 text-sm mt-1">{FIELD_LABELS.name}を入力してください</p>
            )}
          </div>

          <div>
            <label className="flex items-center gap-2 text-body font-semibold text-text mb-2">
              <img
                src={checkIcon}
                alt=""
                className="w-4 h-4 shrink-0"
                width={16}
                height={16}
              />
              Email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); clearError('email'); }}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-100/80 text-text placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
              placeholder=""
            />
            {errors.includes('email') && (
              <p className="text-red-600 text-sm mt-1">{FIELD_LABELS.email}を入力してください</p>
            )}
          </div>

          <div>
            <label className="flex items-center gap-2 text-body font-semibold text-text mb-2">
              <img
                src={checkIcon}
                alt=""
                className="w-4 h-4 shrink-0"
                width={16}
                height={16}
              />
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={phone}
              onChange={(e) => { setPhone(e.target.value); clearError('phone'); }}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-100/80 text-text placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
              placeholder=""
            />
            {errors.includes('phone') && (
              <p className="text-red-600 text-sm mt-1">{FIELD_LABELS.phone}を入力してください</p>
            )}
          </div>

          <div>
            <label className="flex items-center gap-2 text-body font-semibold text-text mb-2">
              <img
                src={checkIcon}
                alt=""
                className="w-4 h-4 shrink-0"
                width={16}
                height={16}
              />
              Company
            </label>
            <input
              type="text"
              name="company"
              value={company}
              onChange={(e) => { setCompany(e.target.value); clearError('company'); }}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-100/80 text-text placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
              placeholder=""
            />
            {errors.includes('company') && (
              <p className="text-red-600 text-sm mt-1">{FIELD_LABELS.company}を入力してください</p>
            )}
          </div>

          <div>
            <label className="flex items-center gap-2 text-body font-semibold text-text mb-2">
              <img
                src={checkIcon}
                alt=""
                className="w-4 h-4 shrink-0"
                width={16}
                height={16}
              />
              Plan
            </label>
            <select
              name="plan"
              value={plan}
              onChange={(e) => { setPlan(e.target.value); clearError('plan'); }}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-100/80 text-text focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              {PLAN_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            {errors.includes('plan') && (
              <p className="text-red-600 text-sm mt-1">{FIELD_LABELS.plan}を入力してください</p>
            )}
          </div>

          <div>
            <label className="flex items-center gap-2 text-body font-semibold text-text mb-2">
              <img
                src={checkIcon}
                alt=""
                className="w-4 h-4 shrink-0"
                width={16}
                height={16}
              />
              Message
            </label>
            <textarea
              name="message"
              rows={5}
              value={message}
              onChange={(e) => { setMessage(e.target.value); clearError('message'); }}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-100/80 text-text placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300 resize-y"
              placeholder=""
            />
            {errors.includes('message') && (
              <p className="text-red-600 text-sm mt-1">{FIELD_LABELS.message}を入力してください</p>
            )}
          </div>

          <div className="flex items-start gap-3 pt-2">
            <input
              type="checkbox"
              id="agree-privacy"
              checked={agreePrivacy}
              onChange={(e) => setAgreePrivacy(e.target.checked)}
              className="mt-1 w-4 h-4 rounded border-gray-300 text-dark focus:ring-gray-400"
            />
            <label htmlFor="agree-privacy" className="text-body text-text cursor-pointer">
              <Link to="/privacy-policy" className="underline hover:opacity-80">
                プライバシーポリシー
              </Link>
              に同意する
            </label>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={!agreePrivacy}
              className="w-full bg-dark text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Confirm
            </button>
          </div>
        </form>
      </div>

      {showConfirmModal && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 transition-opacity duration-300 ${
            confirmModalPhase === 'visible' ? 'opacity-100' : 'opacity-0'
          }`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="confirm-modal-title"
          onClick={() => setShowConfirmModal(false)}
        >
          <div
            className={`relative bg-light rounded-xl shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 transition-opacity duration-300 ${
              confirmModalPhase === 'visible' ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-text hover:opacity-70"
              onClick={() => setShowConfirmModal(false)}
              aria-label="閉じる"
            >
              <img src={xmarkIcon} alt="" className="w-5 h-5" />
            </button>
            <h2 id="confirm-modal-title" className="text-sub-title font-serif text-text mb-6 pr-10">
              以下の内容で送信します
            </h2>
            <dl className="space-y-3 text-body text-text mb-8">
              <div>
                <dt className="font-semibold text-gray-600">{FIELD_LABELS.name}</dt>
                <dd className="mt-0.5 break-words">{name}</dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-600">{FIELD_LABELS.email}</dt>
                <dd className="mt-0.5 break-words">{email}</dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-600">{FIELD_LABELS.phone}</dt>
                <dd className="mt-0.5 break-words">{phone}</dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-600">{FIELD_LABELS.company}</dt>
                <dd className="mt-0.5 break-words">{company}</dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-600">{FIELD_LABELS.plan}</dt>
                <dd className="mt-0.5 break-words">{planLabel}</dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-600">{FIELD_LABELS.message}</dt>
                <dd className="mt-0.5 break-words whitespace-pre-wrap">{message}</dd>
              </div>
            </dl>
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setShowConfirmModal(false)}
                className="flex-1 py-3 px-6 rounded-lg border border-gray-300 text-text font-semibold hover:bg-gray-100 transition-colors"
              >
                キャンセル
              </button>
              <button
                type="button"
                onClick={handleSend}
                className="flex-1 bg-dark text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
